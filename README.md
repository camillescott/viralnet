# viralnet

[![Gitter](https://badges.gitter.im/viralnet/community.svg)](https://gitter.im/viralnet/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Project data

* **all_repeats.fna.gz**                                                  (sha1sum:17062595b3d81a16e26980847fe6be409a6d8cdb) : All CRISPR repeats by `TAXON_OID___SCAFFOLD_OID`
* **meta_spacers.fna.gz**                                                 (sha1sum:05419668e4a795bafbbdf780dda7462fb6f1879f) : All CRISPR repeats by `TAXON_OID:SCAFFOLD_OID:???:???`
* **spacers_vs_all_viral_sequences_combined_v2_Filtered_1Snp_100AF.lout** (sha1sum:af4263106836c6773ef7f82ace24a3a35a2d67c7) : LAST alignment between all spacers and viral contigs [Paez-Espino *et al.*]
* **Table1_5_combined.txt**                                               (sha1sum:cb2e24ccd384209f8ce4260398ff660b29c22c41) : Metadata on viral contigs and viral OTUs [Paez-Espino *et al.*]
* **viral_spacers.fna**                                                   (sha1sum:fbfe6476ebf2b0339a9993df84a54a81a8299843) : All CRISPR spacers by `TAXON_OID:SCAFFOLD_OID:???:???`
* **predicted_hosts.tsv**                                                 (sha1sum:4918fd93dff34af8423e067c720f029529a4f6d1) : Host predictions for viral UViGs [Paez-Espino *et al.*]

### Project notes

* Because this project makes heavy use of Jupyter notebooks, we recommend using
  [`nbdime`](https://nbdime.readthedocs.io/en/stable/index.html) to make
  interaction with git more convenient.

### References

Paez-Espino, D., Roux, S., Chen, I.M.A., Palaniappan, K., Ratner, A., Chu, K., Huntemann, M., Reddy, T.B.K., Pons, J.C., Llabrés, M. and Eloe-Fadrosh, E.A., 2018. *IMG/VR v. 2.0: an integrated data management and analysis system for cultivated and environmental viral genomes.* **Nucleic acids research**, 47(D1), pp.D678-D686.

Chen, I.M.A., Chu, K., Palaniappan, K., Pillay, M., Ratner, A., Huang, J., Huntemann, M., Varghese, N., White, J.R., Seshadri, R. and Smirnova, T., 2018. *IMG/M v. 5.0: an integrated data management and comparative analysis system for microbial genomes and microbiomes.* **Nucleic acids research**, 47(D1), pp.D666-D677.
