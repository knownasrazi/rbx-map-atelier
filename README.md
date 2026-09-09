# rbx-map-atelier

**Maps, atelier-made.**

> Map atelier for Roblox Studio - place models and export to Luau.

## Features

- 2D canvas, drag to place
- Export to Instance.new Luau

## Hand-crafted TS

\\\	s
export function toLuau(objects: MapObject[]) {
  return objects.map(o => 'local m = Instance.new("Part"); m.Position = Vector3.new(' + o.x + ', ' + o.y + ', ' + o.z + ')').join('\n');
}
\\\

## Run

\\\ash
git clone https://github.com/knownasrazi/rbx-map-atelier.git
cd rbx-map-atelier
bun install
bun run dev
\\\

## License

MIT