Here’s a **clean core data model** for a **Strategy OS Super App**. I’d avoid starting with 25+ tables just because it sounds “enterprise.” The real goal is to model:

  

**who owns strategy, what the strategy is, how it connects, how it is approved, how it is measured, and how it changes over time.**

  

A good model is usually:

- **simple at the core**
    
- **strict on ownership**
    
- **flexible on relationships**
    
- **versioned and auditable**
    

---

# **1. Design principle first**

  

You may be assuming the system is mainly about **documents**. I’d push back a bit.

  

The platform is really about **structured strategic objects** with document-like presentation.

  

So each module should not only store rich text, but also:

- owners
    
- status
    
- time horizon
    
- dependencies
    
- metrics
    
- approvals
    
- links to upstream/downstream entities
    

  

That is what makes dashboards and cross-module intelligence possible.

---

# **2. Recommended core entity groups**

  

A clean model can be grouped into 7 areas:

1. Tenant & identity
    
2. Strategy structure
    
3. Planning & execution
    
4. Finance & risk
    
5. Governance & workflow
    
6. Performance & reporting
    
7. Content, audit, and collaboration
    

---

# **3. The 25 core entities**

  

## **A. Tenant & Identity**

  

### **1. Organization**

  

Represents a tenant/customer.

  

**Key fields**

- id
    
- name
    
- slug
    
- industry
    
- region
    
- size_band
    
- status
    
- created_at
    

  

**Why**

Everything belongs to an organization.

---

### **2. User**

  

A person in the system.

  

**Key fields**

- id
    
- full_name
    
- email
    
- status
    
- last_login_at
    

---

### **3. Membership**

  

Links a user to an organization.

  

**Key fields**

- id
    
- organization_id
    
- user_id
    
- title
    
- department_id
    
- manager_membership_id
    
- joined_at
    
- status
    

  

**Why**

One user may belong to multiple orgs eventually.

---

### **4. Role**

  

Platform or domain role.

  

**Key fields**

- id
    
- organization_id nullable
    
- code
    
- name
    
- scope_type
    

  

Examples:

- super_admin
    
- org_admin
    
- strategy_manager
    
- reviewer
    
- executive
    
- contributor
    
- viewer
    

---

### **5. MembershipRole**

  

Assigns roles to memberships.

  

**Key fields**

- id
    
- membership_id
    
- role_id
    
- module_id nullable
    
- resource_type nullable
    
- resource_id nullable
    

  

**Why**

Lets you do platform-level and module-level access.

---

## **B. Organizational Structure**

  

### **6. Department**

  

Business unit, division, or function.

  

**Key fields**

- id
    
- organization_id
    
- parent_department_id nullable
    
- name
    
- code
    
- leader_membership_id nullable
    

  

**Why**

Business alignment usually happens by department.

---

### **7. PlanningCycle**

  

A strategy time period.

  

**Key fields**

- id
    
- organization_id
    
- name
    
- start_date
    
- end_date
    
- cycle_type
    
- status
    

  

Examples:

- FY2026
    
- 2026–2028 Corporate Strategy
    

---

## **C. Strategy Structure**

  

### **8. Module**

  

Domain module inside the super app.

  

**Key fields**

- id
    
- code
    
- name
    
- description
    
- is_active
    

  

Examples:

- vision
    
- corporate_strategy
    
- business_alignment
    
- risk
    
- finance
    

  

This is optional physically, but useful logically.

---

### **9. StrategyArtifact**

  

Top-level strategic object. This is one of your most important tables.

  

**Key fields**

- id
    
- organization_id
    
- planning_cycle_id
    
- module_id
    
- artifact_type
    
- title
    
- description
    
- owner_membership_id
    
- department_id nullable
    
- status
    
- version_no
    
- effective_from
    
- effective_to nullable
    
- parent_artifact_id nullable
    

  

Examples:

- “2026 Corporate Strategy”
    
- “Retail Banking Strategic Plan”
    
- “Risk Strategy FY2026”
    

  

This is the backbone.

---

### **10. StrategicPillar**

  

Major theme/pillar under a strategy.

  

**Key fields**

- id
    
- artifact_id
    
- name
    
- description
    
- sort_order
    
- owner_membership_id nullable
    

  

Examples:

- Digital Transformation
    
- Operational Excellence
    

---

### **11. Objective**

  

Strategic objective tied to a pillar or artifact.

  

**Key fields**

- id
    
- organization_id
    
- artifact_id
    
- pillar_id nullable
    
- code
    
- title
    
- description
    
- objective_type
    
- owner_membership_id
    
- department_id nullable
    
- start_date
    
- target_date
    
- status
    

  

Examples:

- Reduce onboarding time
    
- Improve compliance readiness
    

---

### **12. Initiative**

  

Execution item created to achieve an objective.

  

**Key fields**

- id
    
- organization_id
    
- artifact_id nullable
    
- objective_id nullable
    
- title
    
- description
    
- owner_membership_id
    
- department_id nullable
    
- priority
    
- start_date
    
- end_date
    
- status
    
- percent_complete
    

  

This is where strategy starts becoming action.

---

### **13. Capability**

  

Represents business or operating capability.

  

**Key fields**

- id
    
- organization_id
    
- name
    
- description
    
- capability_type
    
- parent_capability_id nullable
    
- owner_membership_id nullable
    
- maturity_level nullable
    

  

Examples:

- Digital Onboarding
    
- Fraud Monitoring
    

---

## **D. Finance & Risk**

  

### **14. BudgetAllocation**

  

Funding tied to strategy, objective, initiative, or artifact.

  

**Key fields**

- id
    
- organization_id
    
- planning_cycle_id
    
- artifact_id nullable
    
- objective_id nullable
    
- initiative_id nullable
    
- amount
    
- currency
    
- allocation_type
    
- funding_source
    
- approved_amount
    
- status
    

  

This lets finance connect to strategy without bloating every strategy entity.

---

### **15. Risk**

  

Strategic or operational risk.

  

**Key fields**

- id
    
- organization_id
    
- artifact_id nullable
    
- objective_id nullable
    
- initiative_id nullable
    
- title
    
- description
    
- category
    
- likelihood
    
- impact
    
- risk_score
    
- owner_membership_id
    
- mitigation_plan
    
- status
    

---

### **16. ComplianceItem**

  

Control, policy obligation, or regulatory requirement.

  

**Key fields**

- id
    
- organization_id
    
- module_id nullable
    
- title
    
- description
    
- framework_name
    
- obligation_type
    
- owner_membership_id
    
- due_date nullable
    
- status
    

  

This is useful if governance/compliance matters.

---

## **E. Governance & Workflow**

  

### **17. DecisionRecord**

  

Formal strategic decision.

  

**Key fields**

- id
    
- organization_id
    
- artifact_id nullable
    
- title
    
- description
    
- decision_date
    
- decision_body
    
- proposed_by_membership_id
    
- approved_by_membership_id nullable
    
- outcome
    
- rationale
    

  

This is underrated. Enterprises care a lot about traceability.

---

### **18. WorkflowInstance**

  

Tracks approval/review workflow for a resource.

  

**Key fields**

- id
    
- organization_id
    
- resource_type
    
- resource_id
    
- workflow_type
    
- status
    
- initiated_by_membership_id
    
- started_at
    
- completed_at nullable
    

---

### **19. WorkflowStep**

  

Individual workflow step.

  

**Key fields**

- id
    
- workflow_instance_id
    
- step_name
    
- step_order
    
- assigned_to_membership_id nullable
    
- assigned_role_id nullable
    
- status
    
- due_date nullable
    
- acted_at nullable
    
- action_taken nullable
    
- comments nullable
    

---

## **F. Performance & Reporting**

  

### **20. KPI**

  

Metric definition.

  

**Key fields**

- id
    
- organization_id
    
- artifact_id nullable
    
- objective_id nullable
    
- initiative_id nullable
    
- name
    
- description
    
- unit
    
- target_value
    
- baseline_value nullable
    
- aggregation_method
    
- owner_membership_id
    
- reporting_frequency
    

  

Examples:

- NPS
    
- onboarding time
    
- cost-to-serve
    

---

### **21. KPIValue**

  

Time-based metric entry.

  

**Key fields**

- id
    
- kpi_id
    
- period_start
    
- period_end
    
- actual_value
    
- target_value nullable
    
- status
    
- submitted_by_membership_id nullable
    
- recorded_at
    

  

Keeps KPI definitions separate from KPI measurements.

---

### **22. Scorecard**

  

Executive or domain reporting bundle.

  

**Key fields**

- id
    
- organization_id
    
- planning_cycle_id nullable
    
- title
    
- scorecard_type
    
- owner_membership_id
    
- status
    

  

Examples:

- Executive Strategy Scorecard
    
- Risk Scorecard
    

---

## **G. Content, Links, Collaboration, Audit**

  

### **23. ResourceLink**

  

Generic relationship table. This is one of the most important tables in the whole system.

  

**Key fields**

- id
    
- organization_id
    
- source_type
    
- source_id
    
- target_type
    
- target_id
    
- relationship_type
    
- metadata_json nullable
    

  

Examples:

- objective **drives** initiative
    
- initiative **funded_by** budget
    
- risk **threatens** objective
    
- business_plan **aligns_to** corporate_strategy
    

  

This table is your strategy graph.

---

### **24. DocumentVersion**

  

Narrative content/version for an artifact or resource.

  

**Key fields**

- id
    
- organization_id
    
- resource_type
    
- resource_id
    
- version_no
    
- title
    
- content_json or content_markdown
    
- change_summary
    
- created_by_membership_id
    
- created_at
    
- published_at nullable
    

  

This lets you have structured data + narrative document.

---

### **25. ActivityEvent**

  

Audit/activity stream.

  

**Key fields**

- id
    
- organization_id
    
- actor_membership_id nullable
    
- event_type
    
- resource_type
    
- resource_id
    
- before_json nullable
    
- after_json nullable
    
- occurred_at
    
- ip_address nullable
    

  

Every serious enterprise product eventually needs this.

---

# **4. The 25-entity list at a glance**

```
1. Organization
2. User
3. Membership
4. Role
5. MembershipRole
6. Department
7. PlanningCycle
8. Module
9. StrategyArtifact
10. StrategicPillar
11. Objective
12. Initiative
13. Capability
14. BudgetAllocation
15. Risk
16. ComplianceItem
17. DecisionRecord
18. WorkflowInstance
19. WorkflowStep
20. KPI
21. KPIValue
22. Scorecard
23. ResourceLink
24. DocumentVersion
25. ActivityEvent
```

---

# **5. Suggested ownership model**

  

A common mistake is weak ownership.

  

Use this principle:

- **Organization** owns everything at tenant boundary
    
- **Module** defines functional domain
    
- **Artifact** is the main business container
    
- **Objective / Initiative / KPI / Risk / Budget** are strategic operating objects
    
- **ResourceLink** handles cross-domain relationships
    
- **DocumentVersion** handles narrative representation
    
- **Workflow + Activity** handle governance and traceability
    

  

That is much cleaner than making everything a document.

---

# **6. Example relationship flow**

  

Example:

  

**Corporate Strategy artifact**

→ has **Strategic Pillars**

→ each pillar has **Objectives**

→ objectives have **Initiatives**

→ initiatives have **Budget Allocations**

→ risks may threaten objectives or initiatives

→ KPIs measure objective outcomes

→ approvals are tracked via workflow

→ all cross-links live in ResourceLink

→ narrative versions live in DocumentVersion

  

This gives you both:

- enterprise governance
    
- dashboard intelligence
    

---

# **7. Example ResourceLink relationships**

  

This table deserves special care.

  

Possible relationship_type values:

- informs
    
- aligns_to
    
- depends_on
    
- funds
    
- measures
    
- threatens
    
- mitigates
    
- governed_by
    
- approved_by
    
- enables
    
- owned_by
    
- contributes_to
    

  

Example rows:

- Vision artifact **informs** Corporate Strategy artifact
    
- Corporate Strategy objective **aligns_to** Business Unit objective
    
- BudgetAllocation **funds** Initiative
    
- Risk **threatens** Objective
    
- KPI **measures** Objective
    

  

This is where your super app becomes intelligent instead of siloed.

---

# **8. What I would simplify for MVP**

  

You do **not** need all 25 in v1.

  

A smarter MVP core would be about 12–15 entities:

- Organization
    
- User
    
- Membership
    
- Role
    
- Department
    
- PlanningCycle
    
- StrategyArtifact
    
- StrategicPillar
    
- Objective
    
- Initiative
    
- KPI
    
- KPIValue
    
- WorkflowInstance
    
- ResourceLink
    
- ActivityEvent
    

  

Then add:

- BudgetAllocation
    
- Risk
    
- DocumentVersion
    
- DecisionRecord
    

  

later.

  

That is the opposing viewpoint to “build the full enterprise model first.”

---

# **9. Where you may be biased**

  

You may be biased toward **completeness over usability**.

  

That is a common founder trap in enterprise software.

  

A rich data model feels powerful, but too much early complexity creates:

- slow product delivery
    
- confusing UI
    
- brittle permissions
    
- migration pain
    

  

The better question is not:

“what is the full data model?”

  

It is:

“what is the smallest durable model that can still grow into the full system?”

---

# **10. Fact vs opinion**

  

## **Facts**

- Multi-tenant strategy platforms need tenant isolation, ownership, workflow, and auditability.
    
- Executive dashboards require structured entities such as objectives, initiatives, metrics, and risks.
    
- Versioning narrative content separately from structured entities is usually cleaner than storing everything as documents.
    
- Cross-domain strategy alignment works best with an explicit relationship model.
    

  

## **Opinions**

- StrategyArtifact and ResourceLink are the two most important entities in your system.
    
- DocumentVersion should be secondary to structured strategy data, not the primary model.
    
- You should avoid implementing all 25 entities in the first release.
    

---

# **11. A practical database shape**

  

A practical implementation could look like this:

  

## **Stable core tables**

- organizations
    
- users
    
- memberships
    
- roles
    
- membership_roles
    
- departments
    
- planning_cycles
    
- modules
    

  

## **Strategy tables**

- strategy_artifacts
    
- strategic_pillars
    
- objectives
    
- initiatives
    
- capabilities
    

  

## **Control/performance tables**

- budget_allocations
    
- risks
    
- compliance_items
    
- decisions
    
- workflows
    
- workflow_steps
    
- kpis
    
- kpi_values
    
- scorecards
    

  

## **Shared infrastructure tables**

- resource_links
    
- document_versions
    
- activity_events
    

---

# **12. My recommendation**

  

If I were planning this product seriously, I’d define:

1. **core entities**
    
2. **ownership rules**
    
3. **status lifecycle per entity**
    
4. **relationship types**
    
5. **which entities are editable in which module**
    
6. **which fields are global vs module-specific**
    

  

That matters more than just listing tables.

---

# **13. The next thing you should define**

  

The next valuable step is not more entities.

  

It is this:

  

**entity ownership matrix**

  

Example:

- Corporate Strategy module owns StrategicPillar
    
- Business Alignment module owns department-level Objective
    
- KPI module owns KPI definitions
    
- Dashboard reads all but owns none
    
- Governance module owns WorkflowInstance and DecisionRecord
    

  

Without that, module boundaries will get messy fast.

---

# **14. Three questions to pressure-test this**

  

Why do you want StrategyArtifact to be a universal container instead of separate hard-coded entities per module?

  

How much of your product value comes from structured relationships versus document authoring?

  

How will you prevent two modules from editing the same strategic object in conflicting ways?

  

If you want, I’ll turn this into a **proper ERD-style blueprint** next, with:

**entity → key fields → relationships → ownership by module**.