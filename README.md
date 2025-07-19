OWASP API Governance
A lightweight, production-ready project for enforcing API governance using Spectral.
It ensures your OpenAPI specifications follow best practices, consistent versioning, naming conventions, and organization-wide rules.

🚀 Features
✅ Lint OpenAPI 2.0 & 3.0 specifications

✅ Custom governance rules with Spectral

✅ Enforce versioning in API paths and info fields

✅ Enforce naming conventions, summaries, tags, and more

✅ Optimized with precompiled rulesets for faster linting

✅ GitHub Actions support for CI/CD pipelines


📁 Project Structure


api-governance/
│
├── .spectral.yaml           # Main ruleset config extending custom rules
├── compiled-ruleset.json    # Precompiled ruleset for faster linting
├── governance-rules/
│   ├── governance-rules.yaml    # Core governance rules
│   ├── naming-conventions.yaml  # Naming standards for APIs
│   ├── src/
│   │   └── rules/
│   │       └── versioning/
│   │           ├── version-path-rule.yaml
│   │           └── info-version-rule.yaml
│   └── functions/               # Custom Spectral functions (if any)
│
├── specs/                   # Sample OpenAPI specifications
│
├── tests/
│   └── versioning/
│       ├── valid-api-spec.yaml
│       └── invalid-api-spec.yaml
│
├── docs/                     # Documentation and usage examples
│
├── .github/
│   └── workflows/
│       └── lint-api.yml      # GitHub Action for CI linting
│
├── package.json              # Project scripts and dependencies
└── README.md                 # Project documentation (you are here)

📜 Custom Rules
✅ Versioning Rules

Rule	                 Purpose	                                                                           Error Message

versioning-path-prefix	Enforce that all API paths start with a version prefix (e.g., /v1/)	 Path must start with a version like /v1/
versioning-info-field	Ensure info.version follows semantic versioning (x.y.z)  	         info.version must follow semantic versioning

 Linting Commands

Install dependencies:
npm install

Compile the ruleset:
npm run lint:compile

Lint all sample API specs:
npm run lint:api

Lint a specific API spec manually:
npx spectral lint -r compiled-ruleset.json specs/example-api.yaml


🤝 Contributing
Fork this repository

Create a new branch (git checkout -b feature/my-new-rule)

Add or update rules/specs

Run npm run lint:compile and npm run lint:api

Submit a pull request 


License
Licensed under the Apache 2.0 License.



🔗 Resources

OWASP API Security Top 10
Spectral Documentation

