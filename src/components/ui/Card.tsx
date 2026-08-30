// From the MBS Figma design system (node 922:13487, "MBS Card Slot") — its
// spec (border color, all 3 padding presets, demo content) is byte-for-byte
// identical to "MBS Outline Container" (node 301:21331). Rather than
// duplicating that component under a new name, Card is that same component,
// exported under the name this design system's Figma file uses for it.
export { Container as Card, type ContainerPadding as CardPadding } from "./Container";
