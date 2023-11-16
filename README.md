# Install

```bash
$ npm install
```

# Release
1. Ensure 7zip is installed (https://www.7-zip.org/download.html)
2. Set system env. variable: 
```bash
export PATH=$PATH:/c/Program\ Files/7-Zip
```
3. Run the release script:
```bash
$ bash release.sh
```
4. Create and publish a new release on https://github.com/niiicolai-apps/frontend-ui/releases/new (Remember to include the zip created in step 3)

# Usage in development

```bash
$ npm run dev
```

# Usage in other projects

## 1. Install
### Install in other projects
Remember to replace `#v1.0.2` with the needed version.
```bash
npm install --save niiicolai-apps/frontend-ui#v1.0.2
```

### Update in other projects
```bash
npm update niiicolai-apps/frontend-ui
```

## 2. Import variables
Import https://github.com/niiicolai-apps/frontend-ui/blob/main/src/css/variables.css to add color theme, etc.

