export interface AuthFormData {
    email: string;
    password: string;
    name?: string;
}

export interface AuthModalData {
    isRegister: boolean;
    title: string;
    description: string;
    buttonText: string;
  }