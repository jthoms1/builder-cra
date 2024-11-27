## Setup

1. Install the required packages.

```bash
npm install npm i --save-dev concurrently, @builder.io/dev-tools, @builder.io/react
```

2. Add a dev task to npm scripts.

```json
  "scripts": {
    ...
    "dev": "concurrently \"react-scripts start\" \"builder-dev-tools\""
  },
```

3. Create a `.env` file that contains your Builder API key. [Docs explaining the key.](https://www.builder.io/c/docs/using-your-api-key#using-builder-api-keys)

```bash
REACT_APP_PUBLIC_BUILDER_KEY=<BUILDER KEY>
```

4. Create a `builder-registry.ts` file.

```bash
touch ./src/builder-registry.ts
```

5. Create a figma-imports component. Code can be found at `/src/components/figma-imports.tsx`

6. Add figma-imports component as a path within your router of choice. But make it only appear in development. The below example is for React Router.

```ts
const routes = [
  {
    path: "/",
    element: <Root />,
  },
];

// Only add the Figma plugin route in development
if (process.env.NODE_ENV === "development") {
  import("./builder-registry");

  routes.push({
    path: "/figma-imports",
    element: <FigmaPlugin />,
  });
}

const router = createBrowserRouter(routes);
```
