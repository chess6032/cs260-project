# CS 260 Notes

<!-- [My startup - Simon](https://simon.cs260.click) -->

You can find my lecture notes for this class in my [w26 notes repo](https://github.com/chess6032/w26notes/tree/main/cs260).

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
<!-- - [MDN](https://developer.mozilla.org) -->

## AWS

My server's public IPv4 address is: `34.199.199.250`

As directed in the [EC2 instructions](https://github.com/webprogramming260/webprogramming/blob/main/instruction/webServers/amazonWebServicesEc2/amazonWebServicesEc2.md), I made it an elastic IP and always keep my server running. (Tbh I don't totally know the reason for that&mdash;I think it had to do w/ cost or smth.)

The server runs on AWS's `us-east-1` (N. Virginia), because that's the only one that has CS 260's AMI.

I registered the domain name `youmustnot.click` for Route 53. I had some trouble at first because my account wasn't approved for domain registration, but after contacting AWS support they lifted that hold for me.

<!-- (Note to self: I registered `youmustnot.click` under my personal email address and used my home address for it as well (NOT my current address that I'm living in for school).) -->

## Caddy

## Deploying

Look, Mom! I deployed Simon and my startup!! You can see them at `

The deploy script usage is like this:

```sh
./deployFiles.sh -k your-pem-key -h host-name -s subdomain
```

Note that `./deployFiles.sh` will take EVERYTHING in the directory it's currently in, so be careful where you run it.

Also WSL doesn't like smth about my key? But you need a POSIX-compliant terminal to run `deployFiles.sh`. Warp didn't work for me, but GitBash did.

## HTML


## CSS

## React Part 1: Routing

## React Part 2: Reactivity

I hear this part is balls. Wish me luck for when I get to this point.