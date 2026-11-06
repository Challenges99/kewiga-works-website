# Fixes the OneDrive "EINVAL: invalid argument, readlink ...\.next\..." error, then starts the dev server.
# OneDrive sometimes swaps files in the .next working folder for online-only placeholders, which Next.js
# can't read. This deletes .next, recreates it set to "Always keep on this device", and runs npm run dev.
# Run with: npm run dev:fresh
$ErrorActionPreference = 'Stop'
Set-Location (Join-Path $PSScriptRoot '..')
if (Test-Path .next) { Remove-Item .next -Recurse -Force }
New-Item -ItemType Directory .next | Out-Null
attrib +P -U .next
Write-Host 'Cleared .next and pinned it to this PC. Starting the dev server...'
npm run dev
