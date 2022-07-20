# Metamask Connect

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you've installed it right if you can run:
    - `git --version`
- [Nodejs & npm](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` And get an ouput like: `vx.x.x`
  - You'll know you've installed npm right if you can run:
    - `npm --version` And get an ouput like `x.x.x`
    - You might need to install it with npm
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like: `x.x.x`
    - You might need to install it with npm
- [Metamask](https://metamask.io/)
  - This is a browser extension that lets you interact with the blockchain.

## Quickstart

1. Clone the repo, install dependencies, and create the build.

```
git clone https://github.com/sofianhw/dlyscl-web3-bootcamp
cd dlyscl-web3-bootcamp
yarn
yarn build
```

2. Serve the file

```
yarn http-server
```

And you'll see an output like:

```
Available on:
  http://127.0.0.1:8080
  http://x.x.x.x:8080
Hit CTRL-C to stop the server
```

Copy paste the first link into your browser, and you should see a small button that says "connect".

![Connect](connect.png)

Hit it, and you should see metamask pop up.