import { DataGrid, usePagination } from '@openfun/cunningham-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import IconUser from '@/assets/icons/icon-user.svg';
import { Box, Card, TextErrors } from '@/components';
import { useCunninghamTheme } from '@/cunningham';
import { Role, useTeamAccesses } from '@/features/teams/api/';
import { PAGE_SIZE } from '@/features/teams/conf';

import { MemberAction } from './MemberAction';

interface MemberGridProps {
  teamId: string;
  currentRole: Role;
}

export const MemberGrid = ({ teamId, currentRole }: MemberGridProps) => {
  const { t } = useTranslation();
  const { colorsTokens } = useCunninghamTheme();
  const pagination = usePagination({
    pageSize: PAGE_SIZE,
  });
  const { page, pageSize, setPagesCount } = pagination;
  const { data, isLoading, error } = useTeamAccesses({
    teamId: teamId,
    page,
  });

  const accesses = data?.results;

  useEffect(() => {
    setPagesCount(data?.count ? Math.ceil(data.count / pageSize) : 0);
  }, [data?.count, pageSize, setPagesCount]);

  const dictRole = {
    [Role.ADMIN]: t('Admin'),
    [Role.MEMBER]: t('Member'),
    [Role.OWNER]: t('Owner'),
  };

  return (
    <Card
      className="m-b pb-s"
      $overflow="auto"
      $css={`
        margin-top:0;
        & .c__pagination__goto {
          display: none;
        }
        & table th:first-child, 
        & table td:first-child {
          padding-right: 0;
          width: 0;
        }
      `}
      aria-label={t('List members card')}
    >
      {error && <TextErrors causes={error.cause} />}

      <DataGrid
        columns={[
          {
            id: 'icon-user',
            renderCell() {
              return (
                <Box $direction="row" $align="center">
                  <IconUser
                    aria-label={t('Member icon')}
                    width={20}
                    height={20}
                    color={colorsTokens()['primary-600']}
                  />
                </Box>
              );
            },
          },
          {
            headerName: t('Names'),
            field: 'user.name',
          },
          {
            field: 'user.email',
            headerName: t('Emails'),
          },
          {
            id: 'role',
            headerName: t('Roles'),
            renderCell({ row }) {
              return dictRole[row.role];
            },
          },
          {
            id: 'column-actions',
            renderCell: ({ row }) => {
              return (
                <MemberAction
                  teamId={teamId}
                  access={row}
                  currentRole={currentRole}
                />
              );
            },
          },
        ]}
        rows={accesses || []}
        isLoading={isLoading}
        pagination={pagination}
      />
    </Card>
  );
};