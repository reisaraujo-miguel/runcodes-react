FROM quay.io/fedora/fedora-minimal:42


RUN dnf install -y --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release &&\
		dnf install -y bun &&\
		dnf clean all
