import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import IconCard from "../components/IconCard";

// ❖ IconCard
interface FigmaIconCardProps extends BaseFigmaProps {
  Description?: string;
  Collection?: string;
  Title?: string;
  Icon?: string;
  Alignment?: "Center" | "Left" | "Right" | "Alignment4";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "ccbf1e0282711317826726121868c19206d8595b",
  mapper(figma: FigmaIconCardProps) {
    return (
      <IconCard
        icon={figma.Icon ?? ""}
        title={figma.Title ?? ""}
        description={figma.Description ?? ""}
        altText={figma.Collection ?? ""}
        alignment={
          figma.Alignment?.toLowerCase() as "center" | "left" | "right"
        }
      />
    );
  },
});
