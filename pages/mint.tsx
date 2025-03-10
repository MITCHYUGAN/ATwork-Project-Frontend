import { Divider } from "@interchain-ui/react";
import { Wallet } from "@/components";
import { Mint } from "@/components/mint";

export default function MintPage() {
  return (
    <>
      <Wallet />
      <Mint />
      <Divider mt="$16" mb="$16" />
    </>
  )
}