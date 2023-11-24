import { createMachine } from "xstate";

export const FetchMachine = createMachine(
  {
    initial: "idle",
    states: {
      idle: {
        on: {
          FETCH: {
            target: "loading",
          },
        },
      },
      loading: {
        invoke: {
          src: "FETCH_DATA",
          onDone: {
            target: "success",
          },
          onError: {
            target: "failure",
          },
        },
      },
      success: {
        type: "final",
      },
      failure: {
        after: {
          RETRY_DELAY: [
            {
              target: "loading",
              cond: "canRetry",
              actions: "increaseRetryCount",
            },
            {
              target: "error",
              actions: "setError",
            },
          ],
        },
      },
      error: {
        on: {
          RETRY: {
            target: "loading",
            actions: "retry",
          },
        },
      },
    },
  },
  {
    services: {
      FETCH_DATA: (context, event) => {
        if (event.type === "FETCH") {
          context.url = event.url;
        }
        if (event.type == null) return Promise.reject("No URL");
        return fetch(context.url)
          .then((res) => res.json())
          .then((data) => (context.data = data));
      },
    },
    delays: {
      RETRY_DELAY: (context) => context.retries * 1000,
    },
    guards: {
      canRetry: (context) => context.retries < 2,
    },
    actions: {
      retry: (context) => {
        context.error = undefined;
        context.retries = 0;
        context.data = undefined;
      },
      setError: (context) => (context.error = "Error Loading Resources"),
      increaseRetryCount: (context) => (context.retries += 1),
    },
  }
);
