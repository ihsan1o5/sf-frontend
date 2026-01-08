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
    studentName?: string;
    title?: string;
    beneficiary?: string;
    dueDate?: string;
    forMonth?: string;
    forYear?: string;
    toAccount?: string;
    toUser?: string;
    invoiceId?: string;
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

export type PayDialogProps = {
    isVisible: boolean;
    method: 'easypaisa' | 'jazzcash';
    onClose: () => void;
    handleSubmit: (
        account: string,
        title: string
    ) => Promise<{ success: boolean; error?: string }>;
}; 

export type Account = {
    _id?: string;
    accountNumber: string;
    accountTitle: string;
    bankName: string;
};

export type User = {
    _id: string;
    email: string;
    name: string;
};

export type Invoice = {
    _id: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;

    fromAccount: Account;
    toAccount: Account;

    fromUser: User;
    toUser: User;
};

export type InvoiceDialogProps = {
    isVisible: boolean;
    onClose: () => void;
    invoice: Invoice | null;
}

export type Step = 'account' | 'otp' | 'success';
