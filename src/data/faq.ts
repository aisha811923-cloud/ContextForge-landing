import { FAQItemData } from '@/types';

export const FAQ_ITEMS: FAQItemData[] = [
  {
    id: 'is-open-source',
    question: 'Is ContextForge open-source?',
    answer:
      'No. ContextForge is proprietary, closed-source desktop software. However, it is strictly architected under a local-first security model: the client runs locally on your workstation, operates directly on your local files, and never transmits, stores, or mirrors your source code on ContextForge servers.',
    category: 'Architecture',
  },
  {
    id: 'supported-models-providers',
    question: 'Which LLMs and model providers are supported?',
    answer:
      'ContextForge connects to any leading provider via Bring-Your-Own-Key (BYOK): Anthropic (Claude 3.5/3.7), OpenAI (GPT-4o, o-series), Google (Gemini 1.5/2.0), DeepSeek, and Groq. You can also specify any custom OpenAI-compatible base URL (vLLM, LM Studio, LocalAI) or route directly to a local Ollama instance running on localhost.',
    category: 'Features',
  },
  {
    id: 'api-keys-security',
    question: 'Are my API keys sent to ContextForge servers?',
    answer:
      "Never. ContextForge has no backend server or proxy. Your API credentials are encrypted with your operating system's native keychain (Windows Credential Manager, macOS Keychain, Linux Secret Service) and stream directly from your machine to the provider's official endpoints via TLS 1.3.",
    category: 'Security & Privacy',
  },
  {
    id: 'where-source-code-goes',
    question: 'Where does my source code go when I use ContextForge?',
    answer:
      'Your source code remains entirely on your machine. Workspace indices, AST caches, file snapshots, and .contextforgerules are stored solely on your local filesystem. When you submit a prompt, the required context is sent directly over an encrypted TLS connection from your device to the official API endpoints of your selected provider (Anthropic, OpenAI, Google, DeepSeek, Groq). If you run local models via Ollama or custom local runtimes, context never leaves localhost:11434—zero internet traffic is generated.',
    category: 'Security & Privacy',
  },
  {
    id: 'byok-model',
    question: 'How does the Bring-Your-Own-Key (BYOK) model work?',
    answer:
      "ContextForge does not charge markup, middleman tokens, or monthly subscriptions on model inference. You supply your own API keys for Claude, OpenAI, Google Gemini, DeepSeek, Groq, or custom endpoints. Credentials are encrypted and stored in your operating system's native credential vault (Windows Credential Manager, macOS Keychain, or Linux Secret Service API). API requests are dispatched straight from your desktop client to the provider's official endpoints.",
    category: 'Billing & Pricing',
  },
  {
    id: 'ollama-requirement',
    question: 'Do I need Ollama installed to use ContextForge?',
    answer:
      'No. Ollama is completely optional. ContextForge is engineered with a dual-inference bridge: cloud streaming via leading providers (Claude, OpenAI, Gemini, DeepSeek) is supported out of the box. If you install Ollama (localhost:11434), ContextForge automatically detects running local models and allows you to switch seamlessly to 100% offline, zero-telemetry local inference when security demands it.',
    category: 'Architecture',
  },
  {
    id: 'time-machine-vs-git',
    question: 'How does Time Machine rollback differ from Git?',
    answer:
      'Git requires manual staging, committing, or dirty-tree stashing. ContextForge Time Machine operates at the agent turn level: before ContextForge writes or mutates a single file on disk, it writes an atomic pre-mutation snapshot to a dedicated local cache directory. If an AI generation produces hallucinated imports or broken refactors, clicking Revert Turn immediately restores the affected files without polluting your Git commit log.',
    category: 'Features',
  },
  {
    id: 'contextforgerules-spec',
    question: 'How do .contextforgerules work?',
    answer:
      'Place a .contextforgerules file in the root of your project directory. ContextForge automatically ingests this file whenever the workspace is loaded. The engine prepends your rules directly into the system prompt context on every generation turn, ensuring the AI strictly adheres to your architectural choices, package managers, naming conventions, and file-access restrictions.',
    category: 'Features',
  },
  {
    id: 'system-requirements',
    question: 'What are the minimum system requirements?',
    answer:
      'Windows 10/11 (64-bit) with Edge WebView2 runtime; macOS 11.0+ Universal binary (Apple Silicon & Intel); modern 64-bit Linux with libwebkit2gtk-4.1. Hardware requirements are minimal: 200MB available disk space and 4GB RAM minimum (sub-50MB idle usage).',
    category: 'Compatibility',
  },
  {
    id: 'tauri-vs-electron',
    question: 'Why choose Tauri v2 over Electron?',
    answer:
      "Electron applications package an entire copy of Chromium and Node.js with every app, leading to 150MB+ download sizes and 400MB-800MB idle memory consumption. ContextForge compiles natively with Rust and hooks into your operating system's built-in web engine (WebKit on macOS/Linux, WebView2 on Windows), resulting in a <15MB installer, <50MB idle RAM, and cold starts under 250ms.",
    category: 'Architecture',
  },
];
