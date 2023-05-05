# Style directory

Contains CSS styles.

# Structure

This directory follows a structure:
* `atoms` - contains things that only have effect when used elsewhere (mixnis, valiables etc)
* `global` - contains styles that can be applied globally with minimum consequences
* `global/elements` - styles native html elements and should be effortlessly reused in other proejcts
* `constants` - similar to `atoms` but represented as a JS module. Contains definitions of things that need to be available at runtime (e.g. animation durations). It is up to the fontned how to include this
