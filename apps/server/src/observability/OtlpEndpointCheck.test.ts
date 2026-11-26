import { assert, it } from "@effect/vitest";
import * as Effect from "effect/Effect";

import * as Check from "./OtlpEndpointCheck.ts";

it.effect.each(["traces", "metrics", "logs"] as const)(
  "does not probe a configured %s destination",
  (signal) =>
    Effect.gen(function* () {
      const service = yield* Check.OtlpEndpointCheck;
      assert.deepEqual(yield* service.check({ signal, url: "https://collector.example.test" }), {
        _tag: "Unreachable",
        timedOut: false,
      });
    }).pipe(Effect.provide(Check.layer)),
);
