// Canonical DAG Definition
// Used for deduplication and structural validation

export interface DagNode {
    id: string;
    type: string;
    hash: string; // Content hash of the node logic/settings
    dependencies: string[]; // IDs of parent nodes
}

export interface CanonicalDag {
    nodes: Map<string, DagNode>;
    rootId: string;
    structureHash: string; // Hash representing the entire topology
}

export function calculateStructureHash(dag: CanonicalDag): string {
    // Placeholder for structural hashing logic (e.g. Merkle tree or sorted hash)
    // console.log("Calculating hash for", dag.rootId);
    return "hash_" + dag.rootId;
}
