export function BrainDumpTitle() {
  return (
    <code className="rounded-md bg-muted px-2 py-1 font-mono text-sm">
      hexdump -C /dev/brain
    </code>
  )
}