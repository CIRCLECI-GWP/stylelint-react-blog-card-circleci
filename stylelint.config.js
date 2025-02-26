export default {
    extends: ["stylelint-config-standard"],

    rules: {
        "unit-allowed-list": ["px", "rem", "%", "ms"],
        "selector-max-id": 0,
        "color-named": "never",
    }
}