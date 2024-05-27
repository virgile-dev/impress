import { Alert, VariantType } from '@openfun/cunningham-react';
import React from 'react';

import { Box, Card, Text } from '@/components';
import { Pad } from '@/features/pads/pad-management';
import { PadToolBox } from '@/features/pads/pad-tools';

import { BlockNoteEditor } from './BlockNoteEditor';

interface PadEditorProps {
  pad: Pad;
}

export const PadEditor = ({ pad }: PadEditorProps) => {
  return (
    <>
      <Box
        $direction="row"
        $margin={{ all: 'big', right: 'none' }}
        $align="center"
        $position="relative"
      >
        <Text as="h2" $align="center" $margin="auto">
          {pad.title}
        </Text>
        <PadToolBox pad={pad} />
      </Box>
      {!pad.abilities.partial_update && (
        <Box className="m-b" $css="margin-top:0;">
          <Alert
            type={VariantType.WARNING}
          >{`Read only, you don't have the right to update this document.`}</Alert>
        </Box>
      )}
      <Card
        $margin={{ all: 'big', top: 'none' }}
        $padding="big"
        $css="flex:1;"
        $overflow="auto"
      >
        <BlockNoteEditor pad={pad} />
      </Card>
    </>
  );
};