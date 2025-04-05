# API Linting Rules

This document outlines the linting rules enforced by Spectral for API governance.

## Error Levels
- **🛑 Error** → Must be fixed for compliance.
- **⚠️ Warning** → Recommended improvements.
- **ℹ️ Info** → General guidance.

### ✅ Standardized Rules  

#### 1️⃣ API Contact Information  
- **Rule Name:** `api-info-contact`  
- **Severity:** ⚠️ Warning  
- **Description:** API specifications must include a contact field.  
- **Fix:** Ensure `info.contact` is present in the API spec.

#### 2️⃣ API Operation Tags  
- **Rule Name:** `api-operation-tags`  
- **Severity:** 🛑 Error  
- **Description:** Every API operation must have at least one tag.  
- **Fix:** Add a `tags` field under each operation.

#### 3️⃣ API Response Description  
- **Rule Name:** `api-response-description`  
- **Severity:** 🛑 Error  
- **Description:** API responses should have a description.  
- **Fix:** Ensure each response object contains a `description` field.

#### 4️⃣ Unused Components  
- **Rule Name:** `unused-components`  
- **Severity:** ℹ️ Info  
- **Description:** Remove unreferenced components to maintain a clean API spec.  
- **Fix:** Check the `components.schemas` section and remove unused entries.

#### 5️⃣ Property Naming Convention  
- **Rule Name:** `camel-case-property-names`  
- **Severity:** ⚠️ Warning  
- **Description:** Properties in request and response schemas should follow camelCase.  
- **Fix:** Update property names to follow the camelCase pattern.  

