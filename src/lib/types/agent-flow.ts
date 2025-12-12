export type FlowStatus = 'ENABLED' | 'DISABLED';
export const FlowStatus = {
    ENABLED: 'ENABLED' as FlowStatus,
    DISABLED: 'DISABLED' as FlowStatus,
};

export type FlowOperationStatus = 'NONE' | 'DELETING' | 'ENABLING' | 'DISABLING';
export const FlowOperationStatus = {
    NONE: 'NONE' as FlowOperationStatus,
    DELETING: 'DELETING' as FlowOperationStatus,
    ENABLING: 'ENABLING' as FlowOperationStatus,
    DISABLING: 'DISABLING' as FlowOperationStatus,
};

export type FlowTriggerType = 'EMPTY' | 'PIECE_TRIGGER' | 'WEBHOOK';
export const FlowTriggerType = {
    EMPTY: 'EMPTY' as FlowTriggerType,
    PIECE: 'PIECE_TRIGGER' as FlowTriggerType,
    WEBHOOK: 'WEBHOOK' as FlowTriggerType,
};

export type FlowActionType = 'CODE' | 'PIECE' | 'LOOP_ON_ITEMS' | 'ROUTER';
export const FlowActionType = {
    CODE: 'CODE' as FlowActionType,
    PIECE: 'PIECE' as FlowActionType,
    LOOP_ON_ITEMS: 'LOOP_ON_ITEMS' as FlowActionType,
    ROUTER: 'ROUTER' as FlowActionType,
};

// Basic properties shared by actions and triggers
interface CommonStepProps {
    name: string;
    valid: boolean;
    displayName: string;
}

// Trigger Types
export interface PieceTriggerSettings {
    pieceName: string;
    pieceVersion: string;
    triggerName?: string;
    input: Record<string, any>;
}

export interface FlowTrigger extends CommonStepProps {
    type: FlowTriggerType;
    settings: any;
    nextAction?: FlowAction;
}

// Action Types
export interface ActionErrorHandlingOptions {
    continueOnFailure?: { value: boolean };
    retryOnFailure?: { value: boolean };
}

export interface CodeActionSettings {
    sourceCode: {
        code: string;
        packageJson: string;
    };
    input: Record<string, any>;
    errorHandlingOptions?: ActionErrorHandlingOptions;
}

export interface PieceActionSettings {
    pieceName: string;
    pieceVersion: string;
    actionName?: string;
    input: Record<string, any>;
    errorHandlingOptions?: ActionErrorHandlingOptions;
}

export interface FlowAction extends CommonStepProps {
    type: FlowActionType;
    settings: any; // Simplified for flexibility
    nextAction?: FlowAction;
    // For Loop
    firstLoopAction?: FlowAction;
    // For Router
    children?: (FlowAction | null)[];
}

// Flow Version
export interface FlowVersion {
    id: string;
    flowId: string;
    displayName: string;
    trigger: FlowTrigger;
    valid: boolean;
    state: 'LOCKED' | 'DRAFT';
}

// Main Flow Structure
export interface SeryncFlow {
    id: string;
    projectId: string;
    externalId?: string;
    version: FlowVersion;
    status: FlowStatus;
}
