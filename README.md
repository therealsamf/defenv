defenv
======

Simple command line interface for ensuring environment variables are defined.

This is meant to be used with [npm scripts](https://docs.npmjs.com/misc/scripts) when environment variables are required for scripts.

## Usage

```terminal
$ defenv [ENVIRONMENT_VARIABLE]
```

## Examples

When the given environment variable is properly defined, the script outputs nothing.

```terminal
$ defenv PATH
$
```

But when you've given the script a missing environment variable, an error is issued and the process exits with an error.

```terminal
$ defenv AWS_SECRET_KEY
**AWS_SECRET_KEY** is not defined
```

