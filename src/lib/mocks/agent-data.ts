import type { SeryncFlow } from "../types/agent-flow";
import { FlowTriggerType, FlowActionType } from "../types/agent-flow";

export const MOCK_AGENT_FLOW: SeryncFlow = {
    id: "flow_12345",
    projectId: "proj_1",
    status: "ENABLED",
    version: {
        id: "v1",
        flowId: "flow_12345",
        displayName: "v1.0.0",
        valid: true,
        state: "DRAFT",
        trigger: {
            name: "trigger",
            type: FlowTriggerType.WEBHOOK,
            settings: {
                inputUiInfo: {}
            },
            displayName: "Webhook Trigger",
            valid: true,
            nextAction: {
                name: "enrich_email",
                type: FlowActionType.PIECE,
                settings: {
                    pieceName: "clearbit",
                    pieceVersion: "0.2.1",
                    actionName: "enrich_person",
                    input: {
                        email: "{{trigger.body.email}}"
                    },
                    inputUiInfo: {}
                },
                displayName: "Enrich with Clearbit",
                valid: true,
                nextAction: {
                    name: "ai_score",
                    type: FlowActionType.PIECE,
                    settings: {
                        pieceName: "openai",
                        pieceVersion: "0.1.0",
                        actionName: "ask_chatgpt",
                        input: {
                            prompt: "Based on this profile: {{enrich_email}}, score the lead from 0-100.",
                            model: "gpt-4"
                        },
                        inputUiInfo: {}
                    },
                    displayName: "Score Lead (GPT-4)",
                    valid: true,
                    // null nextAction signifies end of flow
                }
            }
        }
    }
};

export const MOCK_AGENT_DETAILS = {
    id: "lead-scraper-pro",
    name: "LeadScraper Pro",
    author: {
        name: "GrowthHacker Labs",
        username: "@growth_hacker",
        avatar: "GH"
    },
    description: "Automate LinkedIn lead generation and enrich data with Clearbit. This agent listens for new signups via webhook, enriches the profile data using Clearbit's API, and then uses GPT-4 to score the lead based on ICP fit.",
    category: "Marketing",
    rating: 4.9,
    runs: "12.5k",
    price: "Free",
    updatedAt: "2 days ago",
    flow: MOCK_AGENT_FLOW
};
