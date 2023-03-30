/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docsSidebar: [ 
      "intro",
      
      {
        type: "category",
        label: "1. Setup",
        link: {
            type: 'doc',
            id: "setup/setup",
        },
        items: ["setup/the-tuva-project",
                "setup/terminology"]
      },

        {
            type: "category",
            label: "2. Data Model",
            link: {
                type: 'doc',
                id: "data-model/data-model",
            },
            items: [
                {
                type: "category",
                label: "Input Layer",
                items: ["data-model/staging/claims/eligibility",
                        "data-model/staging/claims/medical-claim",
                        "data-model/staging/claims/pharmacy-claim"]
                },
                {
                    type: "category",
                    label: "Core",
                    items: [
                        "data-model/core/condition",
                        "data-model/core/eligibility",
                        "data-model/core/encounter",
                        "data-model/core/medical-claim",
                        "data-model/core/patient",
                        "data-model/core/pharmacy-claim",
                        "data-model/core/procedure",
                        "data-model/core/provider"]
                },
                {
                    type: "category",
                    label: "Data Marts",
                    items: [
                        "data-model/data-marts/cms-chronic-conditions",
                        "data-model/data-marts/cms-readmissions",
                        "data-model/data-marts/tuva-chronic-conditions",
                        "data-model/data-marts/pmpm",
                        "data-model/data-marts/data-profiling",
                //         {
                //     type: "category",
                //     label: "Data Profiling",
                //     items: [
                //         "data-model/data-profiling/summary",
                //         "data-model/data-profiling/test-detail",
                //         "data-model/data-profiling/test-result"
                //     ]
                // },
                    ]
                }
            ]
        },

        {
            type: "category",
            label: "3. Terminology",
            link: {
                type: 'doc',
                id: "terminology/terminology",
            },
            items: [
                {
                    type: "category",
                    label: "Administrative Codes",
                    items: [
                        "terminology/administrative-codes/admit-source",
                        "terminology/administrative-codes/admit-type",
                        "terminology/administrative-codes/bill-type",
                        "terminology/administrative-codes/discharge-disposition",
                        "terminology/administrative-codes/medicare-dual-eligibility",
                        "terminology/administrative-codes/medicare-status",
                        "terminology/administrative-codes/place-of-service",
                        "terminology/administrative-codes/present-on-admission",
                        "terminology/administrative-codes/revenue-center"

                    ]
                },
                {
                  type: "category",
                  label: "Calendar",
                  items: [
                      "terminology/calendar/calendar"
                  ]
              },
                {
                    type: "category",
                    label: "Conditions and Procedures",
                    items: [
                        "terminology/conditions-and-procedures/apr-drg",
                        // "terminology/conditions-and-procedures/betos",
                        // "terminology/conditions-and-procedures/ccsr",
                        "terminology/conditions-and-procedures/hcpcs-level-2",
                        "terminology/conditions-and-procedures/icd-10-cm",
                        "terminology/conditions-and-procedures/icd-10-pcs",
                        "terminology/conditions-and-procedures/mdc",
                        "terminology/conditions-and-procedures/ms-drg"
                        // "terminology/conditions-and-procedures/snomed-ct"

                    ]
                },
                {
                    type: "category",
                    label: "Demographics",
                    items: [
                        "terminology/demographics/ethnicity",
                        "terminology/demographics/gender",
                        "terminology/demographics/race"
                    ]
                },
                {
                    type: "category",
                    label: "Geography",
                    items: [
                        "terminology/geography/ansi-fips-county",
                        "terminology/geography/ansi-fips-state",
                        "terminology/geography/ssa-fips-state"
                    ]
                },
                // {
                //     type: "category",
                //     label: "Lab",
                //     // link: {
                //     //     type: 'doc',
                //     //     id: "terminology/lab",
                //     // },
                //     items: [
                //         "terminology/lab/loinc"
                //     ]
                // },
                // {
                //     type: "category",
                //     label: "Medications",
                //     link: {
                //         type: 'doc',
                //         id: "terminology/medications",
                //     },
                //     items: [
                //         "terminology/medications/atc",
                //         "terminology/medications/ndc",
                //         "terminology/medications/rx-norm"
                //     ]
                // },

                {
                    type: "category",
                    label: "Providers",
                    link: {
                        type: 'doc',
                        id: "terminology/providers",
                    },
                    items: [
                        // "terminology/providers/medicare-specialty",
                        // "terminology/providers/nppes",
                        // "terminology/providers/nucc-taxonomy",
                        "terminology/providers/provider",
                        "terminology/providers/other-provider-taxonomy"
                        // "terminology/providers/provider-data"

                    ]
                },
                {
                    type: "category",
                    label: "Tuva Concepts",
                    // link: {
                    //     type: 'doc',
                    //     id: "terminology/tuva-concepts",
                    // },
                    items: [
                        "terminology/tuva-concepts/claim-type",
                        "terminology/tuva-concepts/code-type",
                        "terminology/tuva-concepts/encounter-type",
                        "terminology/tuva-concepts/payer-type"]
                }]
        },

      {
        type: "category",
        label: "4. Value Sets",
            link: {
                type: 'doc',
                id: "value-sets/value-sets",
            },
        items: [
                {
                    type: "category",
                    label: "Chronic Conditions",
                    items: [
                        "value-sets/chronic-conditions/cms-chronic-conditions",
                        "value-sets/chronic-conditions/tuva-chronic-conditions"
                    ]},{
                    type: "category",
                    label: "Readmissions",
                    items: [
                        "value-sets/readmissions/acute-diagnosis-ccs",
                        "value-sets/readmissions/acute-diagnosis-icd-10-cm",
                        "value-sets/readmissions/always-planned-css-diagnosis-category",
                        "value-sets/readmissions/always-planned-css-procedure-category",
                        "value-sets/readmissions/exclusion-ccs-diagnosis-category",
                        "value-sets/readmissions/icd-10-cm-to-ccs",
                        "value-sets/readmissions/icd-10-pcs-to-ccs",
                        "value-sets/readmissions/potentially-planned-css-procedure-category",
                        "value-sets/readmissions/potentially-planned-icd-10-pcs",
                        "value-sets/readmissions/specialty-cohort",
                        "value-sets/readmissions/surgery-gynecology-cohort",

                    ]},

                        "value-sets/service-category"
                ]
      },

      {
        type: "category",
        label: "5. Data Marts",
        link: {
          type: 'doc',
          id: "data-marts/data-marts",
        },
        items: ["data-marts/chronic-conditions",
                "data-marts/claims-preprocessing",
                "data-marts/data-profiling",
                "data-marts/pmpm",
                "data-marts/readmissions",            
            ]
        },

      {
        type: "category",
        label: "Appendix",
        items: [
        "appendix/dbt",
        {
          type: "category",
          label: "B. Intro to Claims Data",
          items: ["appendix/fundamentals/introduction",
                  "appendix/fundamentals/claims-data-elements",
                  "appendix/fundamentals/eligibility",
                  "appendix/fundamentals/payments"]
        },
                "appendix/mapping-guide"]
        },

    ]
};

module.exports = sidebars;

