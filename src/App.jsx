import Card from "./components/Card";
import Navbar from "./components/Navbar";
import styles from "./App.module.scss";

const cards = [
  {
    name: "Figma",
    description: "Stay up to date with your team’s latest designs.",
    logo: "figma",
  },
  {
    name: "Google Drive",
    description: "Access all of your documents and information.",
    logo: "gdrive",
  },
  {
    name: "Slack",
    description: "Communicate seamlessly with your teammates.",
    logo: "slack",
  },
  {
    name: "Notion",
    description:
      "Sync all of your notes, team docs, and other important information.",
    logo: "notion",
  },
  {
    name: "Miro",
    description:
      "Unlock the power of collaboration to distill insights from data.",
    logo: "miro",
  },
  {
    name: "Airtable",
    description: "Keep your data organized in a spreadsheet-database format.",
    logo: "airtable",
  },
  {
    name: "Confluence",
    description:
      "Create content, collaborate on work, and organize and share information",
    logo: "confluence",
  },
  {
    name: "Dovetail",
    description: "Organize and tag your research in a collaborative platform.",
    logo: "dovetail",
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <div
        className={`w-fill h-fill pl-16 pr-16 flex flex-col pb-20 ${styles.background}`}
      >
        <div className="mt-40 flex flex-col">
          <div className="text-h1 text-black">Connect your favorite tools</div>
          <div className="flex flex-row flex-wrap gap-8 mt-12 w-full">
            {cards.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                description={card.description}
                logo={card.logo}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row mt-[110px] gap-6">
          <button
            className="h-14 w-28 p-4 text-center rounded-[10px] text-[#1A1225] bg-white hover:bg-[#d8d8d8] text-cta-button transition-ease-300 border-[#C8C8C8] border-[1px]"
            onClick={() => alert("Back clicked")}
          >
            Back
          </button>
          <button
            className=" h-14 w-28 p-4 text-center rounded-[10px] bg-[#1A1225] text-white hover:bg-[#5c5b5b] text-cta-button transition-ease-300"
            onClick={() => alert("Next clicked")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
