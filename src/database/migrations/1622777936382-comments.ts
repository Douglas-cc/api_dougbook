import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class comments1622777936382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:'comments',
          columns:[
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name:'message',
              type:'text',
            },
            {
              name:'post_id',
              type:'uuid',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
          foreignKeys:[
            {
              name:'CommentsPost',
              columnNames:['post_id'],
              referencedColumnNames:['id'],
              referencedTableName: 'posts',
              onDelete:'CASCADE',
              onUpdate:'CASCADE',
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('comments')
    }

}
