import axios from "axios";
import * as cheerio from "cheerio";

let typefaces = [
  {
    name: "Comic Sans",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ComicSansSpec3.svg/1733px-ComicSansSpec3.svg.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Comic_Sans",
    released: 1994,
    classification: "Script",
  },
  {
    name: "Curlz",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/CurlzSpec.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Curlz",
    released: 1995,
    classification: "Display",
  },
  {
    name: "Courier New",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/IBMCourier.svg",
    wikipediaPage:
      "https://en.wikipedia.org/wiki/Courier_(typeface)#Courier_New",
    released: 1995,
    classification: "Monospaced",
  },
  {
    name: "Consolas",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/ConsolasSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Consolas",
    released: 2007,
    classification: "Monospaced",
  },
  {
    name: "Gills Sans ",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/GillSansEG.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Gill_Sans",
    released: 1928,
    classification: "Humanist",
  },
  {
    name: "Frutiger",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/FrutigerSpec-1.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Frutiger_(typeface)",
    released: 1976,
    classification: "Humanist",
  },
  {
    name: "Optima",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Optima_font_sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Optima",
    released: 1958,
    classification: "Humanist",
  },
  {
    name: "Verdana",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/VerdanaSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Verdana",
    released: 1996,
    classification: "Humanist",
  },
  {
    name: "Tahoma",
    sampleImg: "",
    wikipediaPage: "https://en.wikipedia.org/wiki/Tahoma_(typeface)",
    released: 1994,
    classification: "Humanist",
  },
  {
    name: "Droid Sans",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/DroidSerifSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Droid_(typeface)",
    released: 2008,
    classification: "Humanist",
  },
  {
    name: "Calibri",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Calibri_sample_image.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Calibri",
    released: 2007,
    classification: "Humanist",
  },
  {
    name: "Segoe UI",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Segoe_UI_Example.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Segoe#Segoe_UI",
    released: 2003,
    classification: "Humanist",
  },
  {
    name: "Akzidenz-Grotesk",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/AkzidenzGroteskspecAIB1.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Akzidenz-Grotesk",
    released: 1898,
    classification: "Grotesque",
  },
  {
    name: "Helvetica",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/HelveticaSpecimenCH.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Helvetica",
    released: 1957,
    classification: "Grotesque",
  },
  {
    name: "Univers",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Univers_sample_2015.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Univers",
    released: 1957,
    classification: "Grotesque",
  },
  {
    name: "Arial",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/ArialMTsp.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Arial",
    released: 1982,
    classification: "Grotesque",
  },
  {
    name: "Roboto",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Roboto_Font_Sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Roboto",
    released: 2011,
    classification: "Grotesque",
  },
  {
    name: "Franklin Gothic",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/FranklinGothicSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Franklin_Gothic",
    released: 1902,
    classification: "Geometric",
  },
  {
    name: "Futura",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Futura_Specimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Futura_(typeface)",
    released: 1927,
    classification: "Geometric",
  },
  {
    name: "Impact",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/ImpactSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Impact_(typeface)",
    released: 1965,
    classification: "Grotesque",
  },
  {
    name: "Metro",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Metro_(typeface)",
    released: 1929,
    classification: "Geometric",
  },
  {
    name: "FF DIN",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/c/cd/FFDIN.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/FF_DIN",
    released: 1995,
    classification: "Geometric",
  },
  {
    name: "Century Gothic",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/CenturyGothicSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Century_Gothic",
    released: 1990,
    classification: "Geometric",
  },
  {
    name: "Avenir",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/AvenirSP.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Avenir_(typeface)",
    released: 1988,
    classification: "Geometric",
  },
  {
    name: "Gotham",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/GothamSpec.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Gotham_(typeface)",
    released: 2000,
    classification: "Geometric",
  },
  {
    name: "Didot",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/DidotSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Didot_(typeface)",
    released: 1800,
    classification: "Didone",
  },
  {
    name: "Bodoni",
    sampleImg: "",
    wikipediaPage: "https://en.wikipedia.org/wiki/Bodoni",
    released: 1795,
    classification: "Didone",
  },
  {
    name: "Century Schoolbook",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/CenturySchoolbookSAIB.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Century_type_family",
    released: 1918,
    classification: "Didone",
  },
  {
    name: "Garamond",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/GaramondSpecimenA.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Garamond",
    released: 1495,
    classification: "OldStyle",
  },
  {
    name: "Baskerville",
    sampleImg: "",
    wikipediaPage: "https://en.wikipedia.org/wiki/Baskerville",
    released: 1755,
    classification: "Transitional",
  },
  {
    name: "Caslon",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/CaslonSp.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Caslon",
    released: 1725,
    classification: "OldStyle",
  },
  {
    name: "Bembo",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/ET_Book_sample.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Bembo",
    released: 1496,
    classification: "OldStyle",
  },
  {
    name: "Times New Roman",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Times_New_Roman-sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Times_New_Roman",
    released: 1932,
    classification: "Transitional",
  },
  {
    name: "Sabon",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Sabon_lt_std_preview.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Sabon",
    released: 1967,
    classification: "Transitional",
  },
  {
    name: "Palatino",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Palatino_font_sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Palatino",
    released: 1949,
    classification: "Transitional",
  },
  {
    name: "Georgia",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/GeorgiaSpecimenAIB.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Georgia_(typeface)",
    released: 1996,
    classification: "Transitional",
  },
  {
    name: "Minion",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Minion_opticals_sample.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Minion_(typeface)",
    released: 1990,
    classification: "Transitional",
  },
  {
    name: "Cambria",
    sampleImg:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/CambriaSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Cambria_(typeface)",
    released: 2005,
    classification: "Transitional",
  },
];

// Function to fetch the URL and find the "Original File" anchor tag
async function fetchOriginalFileLink(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Find the anchor tag with the text "Original File"
    const link = $("a")
      .filter(function () {
        return $(this).text().trim() === "Original file";
      })
      .attr("href");

    return link ? "https:" + link : `No "Original File" link found on ${url}`;
  } catch (error) {
    return `Error fetching ${url}: ${error.message}`;
  }
}

async function sampleImg(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Find the anchor tag with the text "Original File"
    const link = $("img").eq(3).attr("src");

    return link ? "https:" + link : `No "Original File" link found on ${url}`;
  } catch (error) {
    return `Error fetching ${url}: ${error.message}`;
  }
}

// Main function to process an array of URLs
// async function fetchAllOriginalFileLinks(urls) {
//   const results = await Promise.all(urls.map(fetchOriginalFileLink));
//   return results;
// }

async function main() {
  let modified = await Promise.all(
    typefaces.map(async (typeface) => {
      let result = await sampleImg(typeface.wikipediaPage);
      return {
        ...typeface,
        imageLink: result,
      };
    })
  );

  console.log(modified);
}

main();
