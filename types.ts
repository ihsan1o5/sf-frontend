import { Ionicons } from "@expo/vector-icons";
import { TextProps, TextStyle, ViewStyle } from "react-native";

export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

export type TypoProps = {
    size: number;
    color?: string;
    fontWeight?: TextStyle['fontWeight'];
    children: any | null;
    style?: TextStyle;
    textProps?: TextProps;
};

export type CardProps = {
    color?: string;
    icon?: keyof typeof Ionicons.glyphMap;
    title?: string;
    caption?: string;
};

export type QuickActionBtnProps = {
    icon?: keyof typeof Ionicons.glyphMap;
    text?: string;
}

export type HorizontalWidgetProps = {
    title?: string,
    subTitle?: string,
    icon?: keyof typeof Ionicons.glyphMap;
    date?: string;
}