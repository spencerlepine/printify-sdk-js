DEVELOPMENT

- fix codeql config

```yml
name: 'CodeQL config'
queries:
  - name: Run custom queries
    uses: ./queries
  # Run all extra query suites, both because we want to
  # and because it'll act as extra testing. This is why
  # we include both even though one is a superset of the
  # other, because we're testing the parsing logic and
  # that the suites exist in the codeql bundle.
  - uses: security-experimental
  - uses: security-extended
  - uses: security-and-quality
paths-ignore:
  - tests
  - lib
```

- UPDATE ALL API.md to use collapsible `<details>`
- [ ] GENERATE CODE FROM DOC (products and orders left)
- [ ] Update README.md sample code with the real API
- [BEFORE RELEASE] Replace all spencerlepine-sdk-js
- [BEFORE RELASE] any remaining TODOs

`curl -X GET <https://api.printify.com/v1/shops.json> --header "Authorization: Bearer $PRINTIFY_API_TOKEN"`

## EXAMPLES

- <https://github.com/jacob-hyde/Printify-PHP-SDK>
- <https://github.com/nasa8x/printify-api>
- <https://developers.printify.com/>

## Commits

- Initial release?
- Add unit tests
- Add documentation
- Add workflows
- Configure dependabot
