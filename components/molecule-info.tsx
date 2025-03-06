interface MoleculeInfoProps {
  molecule: string
}

export function MoleculeInfo({ molecule }: MoleculeInfoProps) {
  // In a real app, this would fetch data from an API
  const moleculeData = getMoleculeData(molecule)

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-emerald-400 mb-2">Basic Information</h3>
        <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50">
          <div className="flex justify-between text-sm mb-1">
            <span>Formula</span>
            <span>{moleculeData.formula}</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Molecular Weight</span>
            <span>{moleculeData.molecularWeight} g/mol</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>IUPAC Name</span>
            <span>{moleculeData.iupacName}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-emerald-400 mb-2">Physical Properties</h3>
        <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50">
          <div className="flex justify-between text-sm mb-1">
            <span>Density</span>
            <span>{moleculeData.density} g/cm³</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Melting Point</span>
            <span>{moleculeData.meltingPoint} °C</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Boiling Point</span>
            <span>{moleculeData.boilingPoint} °C</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Appearance</span>
            <span>{moleculeData.appearance}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-emerald-400 mb-2">Chemical Properties</h3>
        <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50">
          <div className="flex justify-between text-sm mb-1">
            <span>Solubility in Water</span>
            <span>{moleculeData.waterSolubility}</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Acidity (pKa)</span>
            <span>{moleculeData.acidity}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Polarity</span>
            <span>{moleculeData.polarity}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-emerald-400 mb-2">Applications</h3>
        <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50 text-sm">
          <ul className="list-disc pl-5 space-y-1">
            {moleculeData.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function getMoleculeData(molecule: string) {
  // Mock data - in a real app, this would come from an API
  const molecules: Record<string, any> = {
    Benzene: {
      formula: "C₆H₆",
      molecularWeight: "78.11",
      iupacName: "Benzene",
      density: "0.879",
      meltingPoint: "5.5",
      boilingPoint: "80.1",
      appearance: "Colorless liquid",
      waterSolubility: "Low (1.8 g/L)",
      acidity: "43",
      polarity: "Non-polar",
      applications: [
        "Precursor to many chemicals",
        "Solvent in laboratory",
        "Component in motor fuels",
        "Used in synthesis of polymers",
      ],
    },
    // Add more molecules as needed
  }

  // Return data for the requested molecule, or a default if not found
  return (
    molecules[molecule] || {
      formula: "Unknown",
      molecularWeight: "N/A",
      iupacName: "Unknown",
      density: "N/A",
      meltingPoint: "N/A",
      boilingPoint: "N/A",
      appearance: "Unknown",
      waterSolubility: "N/A",
      acidity: "N/A",
      polarity: "N/A",
      applications: ["No data available"],
    }
  )
}

