import { IsNumber, IsPositive, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreditDebitDto {
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Amount must be a number with at most 2 decimal places' }
  )
  @IsPositive({ message: 'Amount must be a positive number' })
  @Min(0.01, { message: 'Amount must be at least 0.01' })
  amount: number;

  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'Description must not exceed 500 characters' })
  description?: string;
}

export class TransactionResponseDto {
  id: string;
  userId: string;
  type: string;
  amount: number;
  balanceAfter: number;
  description: string | null;
  createdAt: Date;
}

export class WalletOperationResponseDto {
  success: boolean;
  transaction: TransactionResponseDto;
  previousBalance: number;
  newBalance: number;
}
