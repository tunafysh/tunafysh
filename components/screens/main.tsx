import { FadeInOut } from "../title";
import { AuroraBackground } from "../ui/aurorabg";

export default function MainScreen() {
    return (
        <div>
            <AuroraBackground className="flex items-center justify-center text-white text-nowrap">
                <FadeInOut>
                    <h1>Hello, World!</h1>
                    <h1>I&apos;m Hanan.</h1>
                    <h1>Welcome to my website!</h1>

                </FadeInOut>
            </AuroraBackground>

        </div>
    )
}