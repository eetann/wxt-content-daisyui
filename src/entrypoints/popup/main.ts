import "./app.css";
import App from "./App.svelte";

const app = new App({
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	target: document.getElementById("crxNameHere")!,
});

export default app;
