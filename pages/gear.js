import Head from "next/head";
import Typography from "@material-ui/core/Typography";

export default function About() {
  const hardware = [
    {
      type: "Processor",
      name: "AMD Ryzen 5 3600",
    },
    {
      type: "RAM",
      name: "Team Elite 2 x 8GB",
    },
    {
      type: "Graphics Card",
      name: "Nvidia GTX 1650",
    },
    {
      type: "SSD",
      name: "Samsung M.2 500GB",
    },
    {
      type: "HDD",
      name: "Seagate 1TB",
    },
    {
      type: "Primary Monitor",
      name: "Asus VP259QGR 144hz 23.8in",
    },
    {
      type: "Secondary Monitor",
      name: "HP 23.8in",
    },
    {
      type: "Keyboard",
      name: "Rakk Lam-Ang Lite (Modded)",
    },
    {
      type: "Mouse",
      name: "HyperX Pulse Core",
    },
  ];

  const software = [
    {
      type: "IDE",
      name: "Visual Studio Code",
    },
    {
      type: "API Tester",
      name: "Postman",
    },
    {
      type: "Browser",
      name: "Google Chrome",
    },
  ];

  return (
    <div>
      <Head>
        <title>Gear | Ezekiel Tarranza</title>
      </Head>
      <section>
        <Typography component="h1" variant="h1">
          Gear
        </Typography>
        <Typography component="h4" variant="subtitle1">
          This is what I use on a day to day basis.
        </Typography>
      </section>

      <section>
        <Typography component="h3" variant="h3">
          Hardware
        </Typography>
        {hardware.map((item, e) => (
          <Typography key={e} component="h5" variant="subtitle1">
            {`${item.type}: ${item.name}`}
          </Typography>
        ))}
      </section>

      <section>
        <Typography component="h3" variant="h3">
          Software
        </Typography>
        {software.map((item, e) => (
          <Typography key={e} component="h5" variant="subtitle1">
            {`${item.type}: ${item.name}`}
          </Typography>
        ))}
      </section>
    </div>
  );
}
