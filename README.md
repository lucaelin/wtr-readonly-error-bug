run `test:readonly`, it never finishes, as the browser fails to send the failed test status to wtr

run `test:stringify`, it fails because the stringification logic tries to mutate the readonly array

run `test:stringify-fixed`, it succeedes as a possible fix for the problem by running structuredClone on the input object before stringification
