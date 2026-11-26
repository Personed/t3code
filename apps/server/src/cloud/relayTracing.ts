import type { ManagedPolicySummary } from "@t3tools/contracts";
import type {
  RelayClientTracingConfig,
  RelayClientTracingResource,
} from "@t3tools/shared/relayTracing";
import * as Layer from "effect/Layer";

export const allowedFor = (
  _env: Readonly<Record<string, string | undefined>>,
  _policy: ManagedPolicySummary | undefined,
): boolean => false;

export const relayLayer = (
  _resource: Omit<RelayClientTracingResource, "serviceInstanceId">,
  _tracingConfig?: RelayClientTracingConfig | null,
) => Layer.empty;

export const layerHeadlessRelayClient = Layer.empty;
export const layerServerRelayBroker = Layer.empty;
