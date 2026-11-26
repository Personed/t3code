import { assert, it } from "@effect/vitest";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

import * as Analytics from "./AnalyticsService.ts";

it.effect("never queues product analytics or feedback, even with an explicit opt-in", () =>
  Effect.gen(function* () {
    const analytics = yield* Analytics.AnalyticsService;
    assert.isFalse(yield* analytics.record("server.boot.heartbeat"));
    assert.isFalse(yield* analytics.record("agent.feedback", { kind: "bug" }, { anonymous: true }));
    yield* analytics.recordOwners([{ source: "connect", ownerId: "owner" }], "client");
    yield* analytics.flush;
  }).pipe(
    Effect.provide(Analytics.layer),
    Effect.provide(
      Layer.succeed(
        ConfigProvider.ConfigProvider,
        ConfigProvider.fromUnknown({
          T3CODE_TELEMETRY_ENABLED: "true",
          T3CODE_POSTHOG_HOST: "https://collector.example.test",
        }),
      ),
    ),
  ),
);
