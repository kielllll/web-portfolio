import Head from "next/head";
import Typography from "@material-ui/core/Typography";
import {hardware, software} from "../data/data";

export default function About() {

  return (
    <div>
      <Head>
        <title>Gear | Ezekiel Tarranza</title>
      </Head>
      <section>
        <Typography component="h1" variant="h2">
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
      <hr />
    </div>
  );
}
