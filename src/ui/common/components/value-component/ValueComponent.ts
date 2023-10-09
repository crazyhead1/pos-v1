import { createUseStyles } from "react-jss";
import { ThemeInterface } from "../../../../interfaces/theme";

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
    return {
        container: {
            display: 'flex',
        },
        label: {
            fontSize: 13,
            fontWeight: 600,
        },
        value: {
            fontSize: 15,
        },
        containerColumn: {
            flexDirection: 'column',
        },
        containerRow: {
            alignItems: 'center',
        },
        labelRow: {
            marginRight: 8,
        },
    };
});