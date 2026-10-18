import test from 'node:test'
import assert from 'node:assert/strict'
import { projectPublicTrack } from './public-projection.ts'
test('catálogo expõe apenas quatro campos', () => {
 assert.deepEqual(projectPublicTrack({id:'OSAMBA-1',titulo:'Samba',album:'Cariocando',numero:1,letra:'privada',observacoes:'privadas',chave:'secreta'}), {id:'OSAMBA-1',title:'Samba',album:'Cariocando',number:1})
 for(const row of [{id:2,titulo:'Samba'},{id:'x',titulo:null},{id:'',titulo:'Samba'}]) assert.throws(()=>projectPublicTrack(row))
})
