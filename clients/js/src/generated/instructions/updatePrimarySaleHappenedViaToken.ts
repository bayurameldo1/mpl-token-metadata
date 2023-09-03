/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type UpdatePrimarySaleHappenedViaTokenInstructionAccounts = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** Owner on the token account */
  owner: Signer;
  /** Account containing tokens from the metadata's mint */
  token: PublicKey | Pda;
};

// Data.
export type UpdatePrimarySaleHappenedViaTokenInstructionData = {
  discriminator: number;
};

export type UpdatePrimarySaleHappenedViaTokenInstructionDataArgs = {};

export function getUpdatePrimarySaleHappenedViaTokenInstructionDataSerializer(): Serializer<
  UpdatePrimarySaleHappenedViaTokenInstructionDataArgs,
  UpdatePrimarySaleHappenedViaTokenInstructionData
> {
  return mapSerializer<
    UpdatePrimarySaleHappenedViaTokenInstructionDataArgs,
    any,
    UpdatePrimarySaleHappenedViaTokenInstructionData
  >(
    struct<UpdatePrimarySaleHappenedViaTokenInstructionData>(
      [['discriminator', u8()]],
      { description: 'UpdatePrimarySaleHappenedViaTokenInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 4 })
  ) as Serializer<
    UpdatePrimarySaleHappenedViaTokenInstructionDataArgs,
    UpdatePrimarySaleHappenedViaTokenInstructionData
  >;
}

// Instruction.
export function updatePrimarySaleHappenedViaToken(
  context: Pick<Context, 'programs'>,
  input: UpdatePrimarySaleHappenedViaTokenInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadata: { index: 0, isWritable: true, value: input.metadata ?? null },
    owner: { index: 1, isWritable: false, value: input.owner ?? null },
    token: { index: 2, isWritable: false, value: input.token ?? null },
  };

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data =
    getUpdatePrimarySaleHappenedViaTokenInstructionDataSerializer().serialize(
      {}
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
