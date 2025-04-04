# 🔐 API Governance Rules

This document outlines the rules enforced by Spectral to ensure consistency, clarity, and maintainability across API specifications.

---

## 🔍 Error Reporting & Severity Levels

Each rule is categorized based on its importance:

| Severity  | Symbol | Meaning                                    |
|-----------|--------|--------------------------------------------|
| 🛑 Error   | `error` | Must be fixed for API compliance           |
| ⚠️ Warning | `warning` | Recommended for better documentation       |
| ℹ️ Info    | `info` | Optional cleanup or best practices         |

---

## ✅ Enforced Governance Rules

### 1. **Missing Contact Field in API Info**
- **Message:** `"The API info object must include a contact field."`
- **Severity:** ⚠️ Warning  
- **Fix:** Add a `contact` field inside the `info` object.

### 2. **Missing Tags in API Operations**
- **Message:** `"Each operation must include a 'tags' field for logical categorization."`
- **Severity:** 🛑 Error  
- **Fix:** Add a `tags` array for each operation under `paths`.

### 3. **Missing Summary in API Operations**
- **Message:** `"Each API operation must provide a summary."`
- **Severity:** ⚠️ Warning  
- **Fix:** Include a `summary` field for each HTTP method.

### 4. **Unused Components in the API Spec**
- **Message:** `"Remove unused schemas/components to keep the spec clean."`
- **Severity:** ℹ️ Info  
- **Fix:** Remove any unreferenced components from `components.schemas`.

### 5. **Invalid Operation ID Naming**
- **Message:** `"Enforce camelCase naming convention for operationId."`
- **Severity:** 🛑 Error  
- **Fix:** Update all `operationId` values to use camelCase (e.g., `getUserDetails`).

### 6. **Missing Description in Responses**
- **Message:** `"Each API response must include a description for clarity."`
- **Severity:** 🛑 Error  
- **Fix:** Add a `description` field to each response (e.g., `200`, `404`).

---

## 🧪 How to Run API Linting

To validate your OpenAPI/Swagger files using Spectral, run:

```bash
npm run lint:api
