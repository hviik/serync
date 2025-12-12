// Core interface for the Serync Engine
// This handles the execution and coordination of agents
import type { SeryncFlow } from "../../types/agent-flow";

export interface EngineResult {
    success: boolean;
    output?: any;
    error?: string;
    executionTimeMs: number;
}

export interface EngineContext {
    workspaceId: string;
    projectId: string;
    env: Record<string, string>;
}

export abstract class SeryncEngine {
    abstract runFlow(flow: SeryncFlow, input: any, context: EngineContext): Promise<EngineResult>;
    abstract validateFlow(flow: SeryncFlow): Promise<boolean>;
}
