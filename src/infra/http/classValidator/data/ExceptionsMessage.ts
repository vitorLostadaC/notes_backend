export const ExceptionMessage = {
  IsNotEmpty: (property: string) => `O Campo ${property} é obrigatório`,
  IsEmail: (property: string) => `O Campo ${property} deve ser um email`,
  IsString: (property: string) =>
    `O Campo ${property} deve estar no formato string`,
  MinLength: (min: number, property: string) =>
    `O campo ${property} precisa ter ${min} caracteres`,
};
