import { ExternalLink } from "../components/ExternalLink";
import { CreditsEntry } from "../data/credit";
import { getImage, getJsonArray } from "../utility";

export function CreditsPage() {
    const credits = getJsonArray<CreditsEntry>("credits.json");
    return (
        <div className=" ">
            <div className=" text-7xl m-2">Credits</div>
            <div>
                Information
            </div>
            <div >
                Information was obtained from the following websites:
                <ul>
                    <li><ExternalLink text="Sims 4 Wiki" href="https://sims.fandom.com/wiki/The_Sims_4" /></li>
                    <li><ExternalLink text="Carl's Sims 4 Guide" href="https://www.carls-sims-4-guide.com/" /></li>
                </ul>
            </div>
            <div>
                Information was also obtained in game using the following mods:
                <ul>
                    <li><ExternalLink text="MC Command Center" href="https://deaderpool-mccc.com/" /></li>
                    <li><ExternalLink text="UI Cheats Extension" href="https://www.patreon.com/posts/ui-cheats-v1-13-26240068" /></li>
                </ul>
            </div>
            <br></br>
            <div>
                Images
            </div>
            <div>
                Images on this website are from the Sims 4, developed by Electronic Arts, and are being used under fair use.<br />
                Most images were obtained using <a href="https://github.com/s4ptacle/Sims4Tools" target="_blank">s4pe</a>.
                Some images were obtained from the <a href="https://sims.fandom.com/wiki/The_Sims_4" target="_blank">Sims 4 Wiki</a>, which are credited below.<br />
            </div>
            <div className="flex justify-center">
                {credits.map((credit) => <Entry key={credit.originalFileName} credit={credit} />)}
            </div>
        </div>
    );
}

function Entry({ credit }: { credit: CreditsEntry }) {
    return (
        <div className=" flex m-1 p-2 border border-[--main-color] rounded ">
            <div className="m-1 flex flex-col justify-center">
                <div>File: <a href={credit.source} target="_blank">{credit.originalFileName}</a></div>
                <div>Uploader: <a href={"https://sims.fandom.com/wiki/User:" + credit.uploader} target="_blank">{credit.uploader}</a></div>
            </div>
            <div><img src={getImage(credit.img)}></img></div>
        </div>
    );
}