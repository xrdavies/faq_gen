## General
## Technical
## Node related
- _4001._ **Can I run the Gear node now?**

  Yes, follow the instructions from this article on how to set up and run Gear node under MacOS, Linux and Windows: https://wiki.gear-tech.io/node/setting-up 

- _4002._ **What are hardware requirements for Gear node?**

  There are no special hardware requirements except SSD for running Gear node connected to a test net or in a dev net mode. For nodes in a production network, the hardware requirements will be provided further.

- _4003._ **Are there rewards for running nodes?**

  Running a node in a production network will be incentivized. There are no regular rewards for running nodes in a test net, but participation in community events is also incentivized. Stay tuned.

- _4004._ **How do I make the node work in the background?**

  The solution is to configure the Gear node as a service:
https://wiki.gear-tech.io/node/node-as-service

- _4005._ **I have the error: "IO error: While lock file <path>: Resource temporarily unavailable"**

  You seem to be running several Gear node instances. You likely have configured the node as a service and then ran the second instance from the command line. You should either stop the service or don't run the Gear node from the command line.

- _4006._ **My host provider claims the node abuses their network.**

  This should be resolved by adding --no-private-ipv4 argument when running the node.
 
If for some reason, that --no-private-ipv4 doesn't solve the issue for you, then you can deny egress traffic to: 
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16
100.64.0.0/10
169.254.0.0/16

For example you can use this manual: https://community.hetzner.com/tutorials/block-outgoing-traffic-to-private-networks

- _4007._ **I've configured the node as a service. How can I update it?**

  You are just to replace the node executable (`gear-node`) by the latest version and restart the execution. For example, if your Linux executable is located at `/root/gear-node` you are to run:

wget https://builds.gear.rs/gear-nightly-linux-x86_64.tar.xz
sudo tar -xvf gear-nightly-linux-x86_64.tar.xz -C /root
rm gear-nightly-linux-x86_64.tar.xz
sudo systemctl restart gear-node

- _4008._ **My node stopped to increment the block height after some block number.**

  Update the node binary to the latest version.

- _4009._ **How do I change the port number if the default one is already used by another software?**

  Use on of the supported flags when running the node:

--port <PORT>
    Specify p2p protocol TCP port

--prometheus-port <PORT>
    Specify Prometheus exporter TCP Port

--rpc-port <PORT>
    Specify HTTP RPC server TCP port

--ws-port <PORT>
    Specify WebSockets RPC server TCP port

- _4010._ **I have the error "Verification failed for block <block-id> received from peer <peer-id>"**

  Update the node binary to the latest version.

- _4011._ **How to see Gear node service logs?**

  sudo journalctl -n 100 -f -u gear-node

- _4012._ **I have an error "runtime requires function imports which are not present on the host"**

  Update the node binary to the latest version.

- _4013._ **What is the node syncing time?**

  The full node syncing time may be calculated using the info from the log:

syncing_time (secs) = (target_block - finalized_block) / bps

For example:

Log record -> `Syncing 143.1 bps, target=#3313788 ... finalized #3223552`

syncing_time = (3313788 - 3223552) / 143.1 = 630 secs (10.5 mins)

- _4014._ **Is the node visible in telemetry during syncing?**

  Yes, it is visible on the telemetry portal (https://telemetry.gear-tech.io/). It will be gray until the block height becomes up to date.

- _4015._ **I have the error "error: Found argument '\' which wasn't expected, or isn't valid in this context" when starting the node service**

  The `gear-node.service` configuration file seems to be misconfigured. Refer to https://wiki.gear-tech.io/node/node-as-service for properly configuring the node as a service.

- _4016._ **Should I associate my wallet with the node?**

  No, not at the moment.

## Community
- _3002._ **How to participate in Gear's testnet now? **

  You can review our Wiki and follow the insrtuctions. https://wiki.gear-tech.io/getting-started-in-5-minutes/ 

- _3006._ **What is GRB？**

  We are using Statemine to reward active members of our community with the GEAR Bonus Token (GRB) . GRB token is not our native token. This was made for rewards. If you don't want to miss our updates feel free to join our community on Twitter, Discord or Medium!

- _3007._ **Do you have token available on marketcap now?**

  We don't have a token yet. We are still working on tokenomics. But you can learn all about GEAR from our website at https://gear-tech.io/ For more detailed info you can also check out our wiki page here! https://wiki.gear-tech.io/

