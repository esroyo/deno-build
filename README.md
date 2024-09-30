## 🦕 Deno's build example

### What?
ℹ️ `build` step does not use Deno's recommended [esbuild plugin](https://deno.land/x/esbuild_deno_loader@0.9.0), not being able to resolve `oak` specifier.

✔️ Uncomment lines 2/3 in the `build.ts` file and the `plugins` to see the difference.

🔖 Deno's `bundle` command docs [here](https://docs.deno.com/runtime/reference/migrate_deprecations/#deno-bundle).


### Information
- Deno version: `v1.46.3`