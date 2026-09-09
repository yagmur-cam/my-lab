const projects = [
  {
    name: "Hodgkin-Huxley simulator",
    blurb:
      "HH neurons scaled from a single cell to a coupled 2D grid, producing traveling depolarization waves. Measures conduction velocity against coupling strength and locates the source-sink threshold.",
    repo: "https://github.com/yagmur-cam/hodgkin-huxley-simulator",
    tags: ["Python", "Computational neuroscience"],
  },
  {
    name: "Neural plasticity simulator",
    blurb:
      "How synapses learn: Hebbian rules and spike-timing-dependent plasticity.",
    repo: "https://github.com/yagmur-cam/neural-plasticity-simulator",
    tags: ["Python", "STDP"],
  },
  {
    name: "Hopfield networks & attention",
    blurb:
      "From-scratch implementations of classical and modern Hopfield networks, numerically verifying that modern Hopfield retrieval is identical to one step of Transformer self-attention.",
    repo: "https://github.com/yagmur-cam/hopfield-networks-attention",
    tags: ["Python", "Associative memory"],
  },
  {
    name: "Electron in an EM field",
    blurb:
      "Classical and quantum simulation of an electron in electromagnetic fields: Boris integration, adiabatic invariants, Penning trap spectroscopy, and Landau levels.",
    repo: "https://github.com/yagmur-cam/electron-in-em-field",
    tags: ["Python", "Physics"],
  },
  {
    name: "Painting classifier",
    blurb:
      "A convolutional network in Java/DL4J classifying paintings into 7 art styles, reaching 51.4% test accuracy on 14.7k cleaned WikiArt images. Errors concentrate along art-historically adjacent styles.",
    repo: "https://github.com/yagmur-cam/painting-classifier-cnn",
    tags: ["Java", "Deep learning"],
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-medium">Projects</h1>

      <div className="mt-10 space-y-10">
        {projects.map((p) => (
          <article key={p.name}>
            <h2 className="font-medium">
              <a href={p.repo} className="underline underline-offset-4">
                {p.name}
              </a>
            </h2>
            <p className="mt-2 leading-relaxed text-neutral-600">{p.blurb}</p>
            <p className="mt-2 text-sm text-neutral-400">{p.tags.join(" · ")}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
